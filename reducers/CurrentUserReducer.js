const TEST_USER = {
    firstName: "John",
    lastName: "Doe",
} 

export default (currentUser = TEST_USER, action) => {
    return currentUser
}