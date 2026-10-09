import { useMemo } from "react";

export function useSearch(items, query, fields, statusField ={}) {
    const normalizedQuery = (query ?? "").trim().toLowerCase()

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            const matchesQuery = !normalizedQuery ||
                fields.some((field) => {
                    return String(item[field]).toLowerCase().includes(normalizedQuery)
                 });

            const matchesStatus = Object.entries(statusField).every(
                ([field,value])=> !value ||
                value === "all" ||
                item[field] === value);

            return matchesQuery && matchesStatus


        })
    }, [items, normalizedQuery, fields, statusField])

    return filteredItems;
}