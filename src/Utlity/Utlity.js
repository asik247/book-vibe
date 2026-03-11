// get stored data;
const getStoredBook = ()=>{
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else{
        return [];
    }
}

// saveLocalStored ;
const saveStoredDB = (itme) =>{
    const data = JSON.stringify(itme);
    localStorage.setItem("readList",data)
}

// Add to stored DB;
const addToStoredDB = (id)=>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("This id already exist")
    }else{
        storedBookData.push(id);
        // console.log(storedBookData);
        // const data = JSON.stringify(storedBookData);
        // localStorage.setItem("readList",data)
        saveStoredDB(storedBookData)
    }

}


// Remove code;

const removeDetails = (id)=>{
    // console.log(id);
    const storedBookData = getStoredBook();
    const reminingBook = storedBookData.filter(book=>book!==id);
    saveStoredDB(reminingBook)
}
export {addToStoredDB,getStoredBook,removeDetails}