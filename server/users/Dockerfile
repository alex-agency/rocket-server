FROM golang

RUN mkdir -p /go/src/rocket-server/server

ADD . /go/src/rocket-server/server

RUN curl https://glide.sh/get | sh
RUN go get  github.com/canthefason/go-watcher
RUN go install github.com/canthefason/go-watcher/cmd/watcher

RUN cd /go/src/rocket-server/server && glide install

ENTRYPOINT  watcher -run rocket-server/server/users/cmd -watch rocket-server/server/users
