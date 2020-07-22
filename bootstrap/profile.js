const searchForm = document.getElementById("searchForm");
const apiURL = "https://api.github.com/users/";

const blog = document.getElementById("blog")
const gists = document.getElementById("gists")
const repos = document.getElementById("repos")
const bio = document.getElementById("bio")
const organization = document.getElementById("organiztion")
const following = document.getElementById("following")
const followers = document.getElementById("followers")
const loc = document.getElementById("location")
const profileImage = document.getElementById("profileImage")
const username = document.getElementById("username")

searchForm.onsubmit = function (event) {
    event.preventDefault();
    let mydata = new FormData(searchForm);

    console.log("before fetch"); // Promise
    fetch(apiURL + mydata.get("profileName"))
        .then(function (response) {
            console.log(response)
            response.json()
                .then(function (data) {
                    blog.innerText = data.blog;
                    gists.innerText = data.gists_url;
                    repos.innerText = data.repos_url;
                    bio.innerText = data.bio;
                    organization.innerText = data.company ? data.company : "N/A";
                    following.innerText = data.following;
                    followers.innerText = data.followers;
                    loc.innerText = data.location;
                    profileImage.src = data.avatar_url;
                    username.innerText = data.name;
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
        .catch(function (error) {
            console.log(error);
        })
    console.log("after fetch");

}