import sjcl from "sjcl";

export const decryptData = (data: string) => {
  let decryptedData;

  try {
    decryptedData = sjcl.decrypt(import.meta.env.VITE_SJCL_SECRET, data);
    return decryptedData;
  } catch (error) {
    console.log(error);
  }
};
