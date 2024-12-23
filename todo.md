workon{
    in progress default first pending task and then start timer.
    make a new state var for inprogress task
}

<!-- projecet-structure -->
build{}
public{}
src{
    assets{}
    constant{}
    data{}
    redux{}
    storage{}
    style{}
    utils{}
    components{
        authentication{}
        features{}
        forms{}
        icons{}
        layout{
            new-ui{
                dashboard{}
                my-tasks{}
            }
            old-ui{}
        }
    }
}

 <!-- schema -->
users[
    {
        name: "aaftab",
        email: "aaftabkansari15@gmail.com",
        password: "jhk45$%",
        isLogin: False,
    }
];

allTasks[
    {
        userId:email,
        tasks:[
            {
                taskId: "as21adW21",
                title: "Fix bugs",
                description: "Solve every bugs created when project migrated",
                dueDate: "20/12/2024",
                priority: "High",
                category: "Work",
                status: "Pending",
                timeSpent: "00:00:00",
                pined: false,
            }
        ],

    }
];