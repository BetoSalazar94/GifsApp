import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

const gifCache: Record<string, Gif[]> = {};


export const UseGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const [gifs, setGifs] = useState<Gif[]>([]);


    const handleTermClicked = async (term: string) => {

        if (gifCache[term]) {
            setGifs(gifCache[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);

    }

    const handleSearch = async (query: string) => {

        if (query.trim() === '') return;

        query.trim()

        query.toLowerCase();

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 7));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);

        gifCache[query] = gifs;

        console.log(gifCache);

    }

    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch
    }

}