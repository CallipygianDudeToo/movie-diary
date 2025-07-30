import { Result, SearchResults } from "@/types";

export interface SearchProps {
    searchResults: SearchResults;
};

export interface SearchWithInputProps extends SearchProps {
    input: string;
};

export interface ResultProps {
    result: Result;
}