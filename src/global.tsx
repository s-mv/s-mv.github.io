import { Nav } from "./nav";
import { Projects } from "./projects";
import { Body } from "./body";
import { RefObject, createRef } from "preact";

let nav : RefObject<Nav> = createRef();
let body : RefObject<Body> = createRef();
let projects : RefObject<Projects> = createRef();

export { nav, body, projects };