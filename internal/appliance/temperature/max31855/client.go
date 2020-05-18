package max31855

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"time"

	"github.com/gregorychen3/espresso-controller/internal/appliance/temperature"
	"github.com/pkg/errors"
)

type Client struct {
	url string
}

func NewClient(port int) *Client {
	url := fmt.Sprintf("http://127.0.0.1:%d/temperature", port)
	return &Client{url: url}
}

func (c *Client) Sample() (*temperature.Sample, error) {
	resp, err := http.Get(c.url)
	if err != nil {
		return nil, errors.Wrap(err, "issuing request to thermocouple server")
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		return nil, errors.New("received non-200 response code")
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, errors.Wrap(err, "reading response body")
	}

	val, err := strconv.ParseFloat(string(body), 64)
	if err != nil {
		return nil, errors.Wrap(err, "parsing response to float")
	}

	return &temperature.Sample{
		Value:      val,
		ObservedAt: time.Now(),
	}, nil
}

func (c *Client) Shutdown() error {
	return nil
}
