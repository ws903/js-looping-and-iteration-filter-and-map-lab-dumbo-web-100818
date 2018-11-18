function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function(driver) {
		return driver.revenue > revenue
	})
}

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue).map(function(driver) {
		return driver.name
	})
}

function exactMatch(drivers, match) {
	key = Object.keys(match)[0]
	return drivers.filter(function(driver) {
		return driver[key] === match[key]
	})
}

function exactMatchToList(drivers, match) {
	return exactMatch(drivers, match).map(function(driver) {
		return driver.name
	})
}