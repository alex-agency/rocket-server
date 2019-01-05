package db

import (
	"errors"
	"fmt"

	"github.com/gomodule/redigo/redis"
)

var Config *config.RedisConfig
