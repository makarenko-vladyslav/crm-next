import AddCompanyButton from "./components/AddCompanyButton";
import StatusLabel, { Status } from "./components/StatusLabel";

export default function Home() {
    return (
        <main>
            <h1 className="text-xl">Home Page</h1>

            <AddCompanyButton />
        </main>
    );
}
