var InputFuncs = {
    handleInputChange: (event, obj) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        obj.setState({
            [name]: value
        });
    }
};
export default InputFuncs;

