const ListElement = ["hamza", "anuj", "sachin", "rohit"]

const List = () => {
    return (
        <div>
            <h1>List of Names</h1>
            {
                ListElement.map((name, index) => <h2 key={index}>{name}</h2>)
            }
        </div>
    )
}

export default List