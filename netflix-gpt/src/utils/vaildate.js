export const checkvaildDate = (email, password) => {
    const  isemailvaild = /^([a-zA-Z0-9._%-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispasswordvaild = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isemailvaild)return "Invalid email format";
    if(!ispasswordvaild)return "Password must be at least 8 characters long and contain at least one letter and one number";
    return null;
};