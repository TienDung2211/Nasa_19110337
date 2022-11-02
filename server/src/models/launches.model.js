const launches = new Map();

var latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Expleration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcomming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcomming: true,
            customer: ['Zero to Mastery', 'NASA'],
            flightNumber: latestFlightNumber,
        })
    );
}

function existsLaunchWithId(launchID) {
    return launches.has(launchID);
}

function abortLaunchById(launchID) {
    const abortedLaunch = launches.get(launchID);

    abortedLaunch.upcomming = false;
    abortedLaunch.success = false;
    return abortedLaunch;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
};