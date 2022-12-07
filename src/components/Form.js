

const Form = (props) => {
   

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getGiphy()
    }
    return (
        <form onSubmit={handleSubmit}>
            <button>Trending Giphy</button>
        </form>
    )
}

export default Form