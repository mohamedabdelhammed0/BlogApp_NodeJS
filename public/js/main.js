function setBlogData(blog){
    blog = JSON.parse(blog);
    console.log(blog);
    document.getElementById("modalName").value = blog.name;
    document.getElementById("id").value = blog.id;
    document.getElementById("modalDescription").innerText = blog.description;   
}

function deleteBlog(id){
    console.log(id);
    document.getElementById("idDelete").value = id;
}

