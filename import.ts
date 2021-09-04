// import xml
import { parse } from "https://deno.land/x/xml/mod.ts";
const xml=Deno.fileRead(jc.xml);
console.log(parse(xml));
