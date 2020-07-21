import AsyncStorage from '@react-native-community/async-storage';
class Storage{
    

    storeToken= async(key, value) => {
        try {
            store = await AsyncStorage.setItem(key,value)
            if(store){
                console.log(store)
                return true
            }
            return false
            console.log(store)
            
        }
        catch(err){
            console.log(err)
        }
    }

    removeTokens = async() => {
        try {
            store = await AsyncStorage.clear()
            if(store){
                console.log("Yups cleared")
                return
            }
            console.log("not able to clear")
        }

        catch(err){
            console.log(err)
        }
    }

    retriveItem = async(key) =>{
        try{
            data = await AsyncStorage.getItem(key)
            console.log("data", data)
            if(!data) return false
            return data
        }
        catch(err){
            console.log(err)
        }
    }

    

}

export default new Storage();