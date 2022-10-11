function defangIPaddr(address: string): string {
    let defanged: string = "";
    
    
    for (let char of address) {
        char === "." ? defanged += "[.]" : defanged += char;
    }
    
    return defanged;
};