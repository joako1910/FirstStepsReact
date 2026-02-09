import type { CSSProperties } from "react";

const firstName = "Joaquin";
const lastName = "Alizegui";
const favoriteGames = ["The Withcer", " Lineage II", "League of Legends"];
const isActive = true;
const address = {
  zipCode: "ABC123",
  country: "España",
};
const myStyle: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: isActive ? 10 : 20,
  padding: 10,
  marginTop:30,
};
export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Activo" : "No activo"}</h1>
      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
}
