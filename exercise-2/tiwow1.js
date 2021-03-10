//1
const mandi = () => console.log("Mandi")
const sarapan = (callback) => setTimeout(
    () => {console.log("Sarapan tertunda 3 detik"); callback()}, 
    3000
)
const berangkatSekolah = () => console.log("Berangkat Sekolah")

mandi()
sarapan(berangkatSekolah)

//2
const helloWorld = () => new Promise(
    resolve => setTimeout(() => resolve("Hello World!"), 2000)
)
const messages = async () => {
    let msg = await helloWorld()
    console.log(msg)
}
messages()

//3
const ambilDataUser = () => fetch("https://jsonplaceholder.typicode.com/users")
                                .then(response => response.json())
                                .then(users => console.log(users))
ambilDataUser()