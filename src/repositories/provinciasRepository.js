import DBConfig from './../configs/db-config.js';
import pkg from 'pg'
const { Client, Pool } = pkg;
export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'SELECT * FROM Provincias';
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getByIdAsync = async (id) => {
        let returnEntity = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'SELECT * FROM Provincias WHERE id = $1';
            const result = await client.query(sql, [id]);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    createAsync = async (entity) => {
        let returnEntity = null;
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const sql = `
            INSERT INTO Provincias
            (name, full_name, latitude, longitude, display_order)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;

            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order
            ];

            const result = await client.query(sql, values);

            returnEntity = result.rows[0];

            await client.end();
        }
        catch (error) {
            console.log(error);
        }

        return returnEntity;
    }
    updateAsync = async (entity) => {
        let returnEntity = null;
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const sql = `
            UPDATE Provincias
            SET
                name = $1,
                full_name = $2,
                latitude = $3,
                longitude = $4,
                display_order = $5
            WHERE id = $6
            RETURNING *
        `;

            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order,
                entity.id
            ];

            const result = await client.query(sql, values);

            returnEntity = result.rows[0];

            await client.end();
        }
        catch (error) {
            console.log(error);
        }

        return returnEntity;
    }
    deleteByIdAsync = async (id) => {
        let rowsAffected = 0;
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const sql = 'DELETE FROM Provincias WHERE id = $1';

            const result = await client.query(sql, [id]);

            rowsAffected = result.rowCount;

            await client.end();
        }
        catch (error) {
            console.log(error);
        }

        return rowsAffected;
    }
}