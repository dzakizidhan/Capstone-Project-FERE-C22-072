
const Category = (item) => {
    return (
        <div className="list-group-item" style={{ fontWeight: 600 }} key={item}>
            {item.name}
        </div>
    )
}

export default Category