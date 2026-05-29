import pkg from 'pg'
import config from './../configs/db-config.js'; 

const { Client }  = pkg;
export default class ProvinciasRepository{
    getAllAsync = async () => {
        let returnArray = null
        try{
            const sql = 'select * from Provincias'
            const resultPg = await this.getDBPool
        } catch(error){

        }
    }
}