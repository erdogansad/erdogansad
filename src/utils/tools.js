import sjcl from 'sjcl';

export const decryptData = (data) => {
    return sjcl.decrypt(process.env.REACT_APP_SJCL_SECRET, data);
};