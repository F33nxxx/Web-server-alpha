function FindProxyForURL(url, host) {
    // Route specific domains through the SOCKS proxy
    if (dnsDomainIs(host, ".example.com") || dnsDomainIs(host, "example.com")) {
        return "SOCKS 192.227.192.166:5555";
    }
    // Route all other traffic directly
    return "DIRECT";
}   