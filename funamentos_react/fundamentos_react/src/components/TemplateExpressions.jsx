const TemplateExpressions = () => {

    const name = "Cristian";
    const data = {
        age : 31,
        job : "Programmer"
    };

    return (
        
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>você atua como: {data.job} </p>
            <p> resultado de 4+4 = {4+4}</p>
        </div>
    );


}

export default TemplateExpressions;