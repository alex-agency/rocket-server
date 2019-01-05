FROM golang:1.11

WORKDIR /go/src/github.com/alex-agency/rocket-server

COPY . .

RUN go clean && go test ./server && go build -o server ./server

EXPOSE 3000 8080