import { Placeholder } from "../components/placeholder/placeholder";

export function PageMovieInner() {
    const movie = null;

    if (!movie) {
        return (
            <div>
                <Placeholder text="MOVIE NOT FOUND" />
            </div>
        );
    }

    return (
        <div>
            <Placeholder text="MOVIE" />
        </div>
    );
}
