package config

var (
	Config *RedisConfig
)

type RedisConfig struct {
	RedisAddr     string
	RedisPassword string
	RedisDB       int
}