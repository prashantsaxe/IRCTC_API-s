module.exports = {
    formatDate: (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    },

    generateUniqueId: () => {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    },

    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    },

    handleError: (res, error) => {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};