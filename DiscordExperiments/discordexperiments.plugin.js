/**
 * @name discordExperiments
 * @website https://mido.anlayana.com
 * @source https://github.com/Mid0aria/betterdiscordstuff/discordExperiments
 * @invite WzYXVbXt6C
 */

var discordExperiments = ((t) =>
    class {
        getName() {
            return "Discord Experiments";
        }
        getDescription() {
            return "Enables the experiments tab in discord's settings.";
        }
        getAuthor() {
            return "Mid0aria";
        }
        getVersion() {
            return "0.0.1";
        }

        load = () => {
        let _,
                a = Object.values,
                b = "getCurrentUser",
                c = "actionHandler",
                d = "_actionHandlers",
                l = "_dispatcher",
                i = "ExperimentStore";
            let u = ""; // Define u here
            let m = "";
            webpackChunkdiscord_app.push([
                [Date.now()],
                {},
                (e) => {
                    _ = e;
                },
            ]),
                (m = a(
                    (u = a(_.c).find(
                        (e) =>
                            e?.exports?.default?.[b] &&
                            e?.exports?.default?.[l]?.[d]
                    ).exports.default)[l][d]._dependencyGraph.nodes
                )),
                (u[b]().flags |= 1),
                m.find((e) => "Developer" + i == e.name)[c].CONNECTION_OPEN();
            try {
                m.find((e) => i == e.name)[c].OVERLAY_INITIALIZE({
                    user: {
                        flags: 1,
                    },
                });
            } catch {}
            m.find((e) => i == e.name).storeDidChange();
        }

        start = () => {
            let _,
                a = Object.values,
                b = "getCurrentUser",
                c = "actionHandler",
                d = "_actionHandlers",
                l = "_dispatcher",
                i = "ExperimentStore";
            let u = ""; // Define u here
            let m = "";
            webpackChunkdiscord_app.push([
                [Date.now()],
                {},
                (e) => {
                    _ = e;
                },
            ]),
                (m = a(
                    (u = a(_.c).find(
                        (e) =>
                            e?.exports?.default?.[b] &&
                            e?.exports?.default?.[l]?.[d]
                    ).exports.default)[l][d]._dependencyGraph.nodes
                )),
                (u[b]().flags |= 1),
                m.find((e) => "Developer" + i == e.name)[c].CONNECTION_OPEN();
            try {
                m.find((e) => i == e.name)[c].OVERLAY_INITIALIZE({
                    user: {
                        flags: 1,
                    },
                });
            } catch {}
            m.find((e) => i == e.name).storeDidChange();
        };

        stop = () => {};
    })();
