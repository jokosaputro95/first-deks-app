const connection = require('../../databases/config');
const { contextBridge } = require('electron');

// Pass test 
const fetchData = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT mahasiswa.mNIM, mahasiswa.mFName, mahasiswa.mLName, prodi.pName, mahasiswa.mSemester, mahasiswa.mNoWa
                FROM mahasiswa
                LEFT JOIN prodi
                ON mahasiswa.mNIM = prodi.mNIM
            `,
            (err, results, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );
        // connection.end();
    });
};

contextBridge.exposeInMainWorld('api', {
    fetchData: fetchData
});
