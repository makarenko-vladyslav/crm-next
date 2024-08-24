import StatusLabel, { Status } from "./components/StatusLabel";

export default function Home() {
    return (
        <main>
            <h1 className="text-xl">Home Page</h1>
            <StatusLabel status={Status.Active}>Active</StatusLabel>
            <StatusLabel status={Status.Inactive}>Inactive</StatusLabel>
            <StatusLabel status={Status.Pending}>Pending</StatusLabel>
            <StatusLabel status={Status.Suspend}>Suspend</StatusLabel>
            <StatusLabel disabled={true}>disabled</StatusLabel>
        </main>
    );
}
