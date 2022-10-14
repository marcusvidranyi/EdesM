

export function ProductModal({ title, open }) {
    if(!open) return null
    return(
        <div>
            <h3>{title}</h3>
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" />
            <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
        </div>
    )
}