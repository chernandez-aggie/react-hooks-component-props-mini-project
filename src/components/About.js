function About (props){

    const imgsrc="https://via.placeholder.com/215"
    
    return (
        <aside>
            <img alt="blog logo">{props.imgsrc}</img>
            <p>{props.about}</p>
        </aside>
    )
};

export default About;