import {reversedArray} from "./reversed-array";
import {countNumbers} from "./count-numbers";
import {sortArray} from "./sort-array";

console.log(reversedArray([undefined, "12345", 2, {name: "moeein", family: "aali"}]))

console.log(countNumbers([undefined, "12345", 2, {name: "moeein", family: "aali"}, 1.1, Math.PI]))

console.log(sortArray([
    {name: "moeein", created_at: "2025-03-01T10:00:00.000Z"},
    {name: "moeein", created_at: "2024-01-01T10:00:00.000Z", modified_at: "2025-01-01T10:00:00.000Z"},
    {name: "moeein", created_at: "2021-01-01T10:00:00.000Z"},
    {name: "moeein", created_at: "2020-01-01T10:00:00.000Z", modified_at: "2022-01-01T10:00:00.000Z"},
    {age: 21, created_at: "2023-01-01T10:00:00.000Z"},

]))
