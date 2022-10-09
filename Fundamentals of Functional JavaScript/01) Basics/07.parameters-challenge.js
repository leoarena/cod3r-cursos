function askRide(pickup = "Current Location", ...stops) {
    console.log(`Picking you up at: ${pickup}`)
    for (const currentStop of stops) {
        console.log(`Stopping at: ${currentStop}`)
    }

    console.log("Ending Ride...")
    console.log("See you in the next one!")
}

askRide("Avenue Z", "Street A")
askRide(undefined, "Street A", "Street C", "Street B")