package main
import (
    "net/http"
)


func main() {
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, r.URL.Path[1:])
  })
    http.ListenAndServe(":80", nil)
}