import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanQR = () => {
      const [hasPermission, setHasPermission] = useState(null);
      const [scanned, setScanned] = useState(false);
      const [scannedData, setScannedData] = useState("");

      useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === "granted");
        })();
      }, []);

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ width: "100%", height: 400 }}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      {scannedData ? <Text>Scanned Data: {scannedData}</Text> : null}
    </View>
  );
}

export default ScanQR