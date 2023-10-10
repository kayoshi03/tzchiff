import API from "./API";

export const AllTea = async  () => {
    try {
        const tea = await API.get("/tea")
        return tea.data
    }
    catch (error) {
        console.log(error)
    }
}