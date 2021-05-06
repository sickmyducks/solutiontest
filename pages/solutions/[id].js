export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(solution => {
        return{
            params: { id: solution.id.toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return{
        props: { solution: data}
    }
}


const Details = ( { solution }) => {
    return(
        <div>
            <h1> Solution { solution.name }</h1>
            <p>{ solution.email }</p>
            <p>{ solution.website }</p>
            <p>{ solution.address.city }</p>
        </div>
    )
}

export default Details;