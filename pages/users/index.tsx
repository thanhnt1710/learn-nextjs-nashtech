export default function Users({ userTest }: any) {
    return (<>
        {userTest?.map((user: any) => <div key={user?.id}>
            <h2>{user?.id} - {user?.name}</h2>
            <hr />
        </div>)}
    </>)
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/users');
    const users = await res.json();
    return {
        props: {
            userTest: users,
        }
    }
}