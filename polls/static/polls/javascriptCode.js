<script>
function createRequest(){
        try{
                request = new XMLHttpRequest();
        }
        catch(tryMS){
                try{
                        request = new ActiveXObject("Msxml2.XMLHTTP");
                }
                catch(otherMS){
                        try{
                                request = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch(failed){
                                request = null;
                        }
                }
        }
        return request;
}
function getDetails(itemName){
        request = createRequest();
        if (request == null){
                alert("Unable to create request");
                return;
        }
        var url = "getDetails.php?ImageID=" + escape(itemName);
        request.open("POST", url, true);
        request.onreadystatechange = displayDetails;
        request.send(null);
}
</script>

