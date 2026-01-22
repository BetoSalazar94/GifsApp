
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { UseGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    const { gifs, previousTerms, handleTermClicked, handleSearch } = UseGifs();

    return (
        <>

            <CustomHeader title="Buscador de gifs" description="Descubre el gif perfecto"></CustomHeader>

            <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            <GifList gifs={gifs}></GifList>


        </>
    )
}
