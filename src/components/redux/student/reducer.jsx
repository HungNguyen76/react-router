const initState = [
  {
    id: "SV001",
    name: "Nguyễn Văn A",
    age: 20,
    sex: true,
    class: "JAVA-11",
  },
  {
    id: "SV002",
    name: "Nguyễn Văn B",
    age: 19,
    sex: true,
    class: "JAVA-11",
  },
  {
    id: "SV003",
    name: "Nguyễn Văn C",
    age: 21,
    sex: true,
    class: "JAVA-10",
  },
];
const studentReducer = ( state = initState, action) => {
    return state;
}
export default studentReducer