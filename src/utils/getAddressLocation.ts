import { reverseGeocodeAsync, LocationObjectCoords } from "expo-location";

export async function getAddressLocation({
  latitude,
  longitude,
}: LocationObjectCoords) {
  try {
    const addressResponse = await reverseGeocodeAsync({
      latitude,
      longitude,
    });
    console.log(addressResponse[0]);
    return addressResponse[0].subregion;
  } catch (error) {
    console.log(error);
  }
}
