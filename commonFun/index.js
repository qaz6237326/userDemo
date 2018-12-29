module.exports = {
    ErrorLog(string, err) {
        console.error(string + '===============================================');
        console.error(err);
        console.error(string + '===============================================');
    },
    SuccessLog(string, rows) {
        console.info(string + '===============================================');
        console.info(rows);
        console.info(string + '===============================================');
    }
};